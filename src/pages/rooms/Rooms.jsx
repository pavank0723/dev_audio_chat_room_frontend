import { useEffect, useState } from 'react';
import { AddRoom, RoomCard } from '../../components';
import { IC_SEARCH, IC_START_ROOM } from '../../utils';
import styles from './Rooms.module.css';
import { getAllRooms } from '../../https';

//#region Dummy Data
// const rooms = [

//     {
//         id: 1,
//         topic: 'Which framework best for frontend ?',
//         speakers: [
//             {
//                 id: 1,
//                 name: 'John Doe',
//                 avatar: '/images/user/img_male_1.png',
//             },
//             {
//                 id: 2,
//                 name: 'Jane Doe',
//                 avatar: '/images/user/img_male_1.png',
//             },
//         ],
//         totalPeople: 40,
//     },
//     {
//         id: 3,
//         topic: 'What’s new in machine learning?',
//         speakers: [
//             {
//                 id: 1,
//                 name: 'John Doe',
//                 avatar: '/images/user/img_male_1.png',
//             },
//             {
//                 id: 2,
//                 name: 'Jane Doe',
//                 avatar: '/images/user/img_male_1.png',
//             },
//         ],
//         totalPeople: 40,
//     },
//     {
//         id: 4,
//         topic: 'Why people use stack overflow?',
//         speakers: [
//             {
//                 id: 1,
//                 name: 'John Doe',
//                 avatar: '/images/user/img_male_1.png',
//             },
//             {
//                 id: 2,
//                 name: 'Jane Doe',
//                 avatar: '/images/user/img_male_1.png',
//             },
//         ],
//         totalPeople: 40,
//     },
//     {
//         id: 5,
//         topic: 'Artificial inteligence is the future?',
//         speakers: [
//             {
//                 id: 1,
//                 name: 'John Doe',
//                 avatar: '/images/user/img_male_1.png',
//             },
//             {
//                 id: 2,
//                 name: 'Jane Doe',
//                 avatar: '/images/user/img_male_1.png',
//             },
//         ],
//         totalPeople: 40,
//     },
// ];
//#endregion 

const Rooms = () => {
    const [showPopUp, setShowPopUp] = useState(false)
    const [rooms, setRooms] = useState([])
    useEffect(()=>{
        const fetchRooms =  async() => {
            const {data} = await getAllRooms()
            setRooms(data)
        }
        fetchRooms()
    },[])
    function onPopUp() {
        setShowPopUp(true)
    }
    return (
        <>
            <div className="container">
                <div className={styles.roomsHeader}>
                    <div className={styles.left}>
                        <span className={styles.heading}>All voice rooms</span>
                        <div className={styles.searchBox}>
                            <img src={IC_SEARCH} alt="search" />
                            <input type="text" placeholder='search' className={styles.searchInput} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <button onClick={onPopUp} className={styles.startRoomButton}>
                            <img
                                src={IC_START_ROOM}
                                alt="add-room"
                            />
                            <span>Start a room</span>
                        </button>
                    </div>
                </div>

                <div className={styles.roomList}>
                    {rooms.map((room) => (
                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>
            </div>
            {showPopUp && <AddRoom onClose={() => setShowPopUp(false)}/>}
        </>
    );
};

export default Rooms;