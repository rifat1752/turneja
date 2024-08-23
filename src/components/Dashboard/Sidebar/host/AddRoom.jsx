import { Helmet } from "react-helmet";
import AddRoomForm from "../../../forms/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../../../api/utilities";
import useAuth from '../../../../hooks/useAuth'
import { addRoom } from "../../../../api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddRoom = () => {
    const {user} = useAuth()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('upload image');
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key:  'selection',
    });
    const handleSubmit =async (e)=>{
      

        e.preventDefault()
        setLoading(true);
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to=dates.endDate;
        const from=dates.startDate;
        const price = form.price.value;
        const total_guest = form.total_guest.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const image = form.image.files[0];

        const host = {
            name:user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }
        const image_url = await imageUpload(image);

        const roomData= {
            location,category,title,from,to,price,total_guest,bedrooms,bathrooms,description,host,image:image_url?.data?.display_url
        }
        try{
            const data = await addRoom(roomData);
            console.table(data)
            setUploadButtonText('Uploaded')
            toast.success('Room Added successfully');
            navigate('/dashboard/my-lists')
        }
        catch(err){

            console.log(err.message)
            toast.error(err.message)
        }
        finally{
            setLoading(false)
        }
       
    }
    const handleDates =(ranges)=>{  
        setDates(ranges.selection)
    }
    const handleImageChange= image=>{
        setUploadButtonText(image.name)
    }
     
    return (
        <div className="">
            <Helmet>
                <title>Add Room | Dashboard</title>
            </Helmet>
            <AddRoomForm 
            handleSubmit={handleSubmit}
             handleDates={handleDates} 
             dates={dates}
              uploadButtonText={uploadButtonText}
               handleImageChange={handleImageChange}
               loading={loading}
               ></AddRoomForm>
        </div>
    );
};

export default AddRoom;