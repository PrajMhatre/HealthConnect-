



import React, { useState } from 'react';

const DoctorProfile = () => {
    // Initial state for doctor profile
    const [doctorDetails, setDoctorDetails] = useState({
        name: '',
        specialization: '',
        address: '',
        age: '',
        location: ''
    });

    const [isNew, setIsNew] = useState(true); // Initially, we are adding new doctor details
    const [isEdit, setIsEdit] = useState(true); // Initially allow inputs for adding new doctor details

    // Handle input changes
    const handleChange = (e) => {
        setDoctorDetails({
            ...doctorDetails,
            [e.target.name]: e.target.value
        });
    };

    // Save new doctor details or update existing details
    const handleSave = (e) => {
        e.preventDefault();
        if (isNew) {
            alert("Doctor's profile added successfully!");
            setIsNew(false); // No longer adding new profile
        } else {
            alert("Doctor's profile updated successfully!");
        }
        setIsEdit(false); // Disable inputs after saving
    };

    // Enable edit mode for updating profile details
    const enableEdit = (e) => {
        e.preventDefault();
        setIsEdit(true); // Re-enable the fields for editing
    };

    return (
        <div className='pt-24'>
        <div className="max-w-lg mx-auto p-8 bg-gradient-to-r from-indigo-500 to-blue-400 shadow-lg rounded-lg ">
            <h2 className="text-3xl text-white font-bold mb-6 text-center">{isNew ? 'Add New Doctor' : 'Doctor Profile'}</h2>
            <form className="space-y-6">

                {/* Name Input */}
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        value={doctorDetails.name}
                        onChange={handleChange}
                        disabled={!isEdit}
                        required
                        className={`w-full px-4 py-2 text-lg text-gray-800 rounded-lg shadow-md outline-none transition-transform duration-300 transform ${
                            isEdit ? 'border-2 border-white focus:border-yellow-500' : 'bg-gray-200 cursor-not-allowed'
                        }`}
                        placeholder=" "
                    />
                    <label className="absolute left-4 -top-4 px-2 bg-gradient-to-r from-indigo-500 to-blue-400 text-white transition-all duration-300 transform scale-90 origin-top-left">
                        Name
                    </label>
                </div>

                {/* Specialization Input */}
                <div className="relative">
                    <input
                        type="text"
                        name="specialization"
                        value={doctorDetails.specialization}
                        onChange={handleChange}
                        disabled={!isEdit}
                        required
                        className={`w-full px-4 py-2 text-lg text-gray-800 rounded-lg shadow-md outline-none transition-transform duration-300 transform ${
                            isEdit ? 'border-2 border-white focus:border-yellow-500' : 'bg-gray-200 cursor-not-allowed'
                        }`}
                        placeholder=" "
                    />
                    <label className="absolute left-4 -top-4 px-2 bg-gradient-to-r from-indigo-500 to-blue-400 text-white transition-all duration-300 transform scale-90 origin-top-left">
                        Specialization
                    </label>
                </div>

                {/* Address Input */}
                <div className="relative">
                    <input
                        type="text"
                        name="address"
                        value={doctorDetails.address}
                        onChange={handleChange}
                        disabled={!isEdit}
                        required
                        className={`w-full px-4 py-2 text-lg text-gray-800 rounded-lg shadow-md outline-none transition-transform duration-300 transform ${
                            isEdit ? 'border-2 border-white focus:border-yellow-500' : 'bg-gray-200 cursor-not-allowed'
                        }`}
                        placeholder=" "
                    />
                    <label className="absolute left-4 -top-4 px-2 bg-gradient-to-r from-indigo-500 to-blue-400 text-white transition-all duration-300 transform scale-90 origin-top-left">
                        Address
                    </label>
                </div>

                {/* Age Input */}
                <div className="relative">
                    <input
                        type="number"
                        name="age"
                        value={doctorDetails.age}
                        onChange={handleChange}
                        disabled={!isEdit}
                        required
                        className={`w-full px-4 py-2 text-lg text-gray-800 rounded-lg shadow-md outline-none transition-transform duration-300 transform ${
                            isEdit ? 'border-2 border-white focus:border-yellow-500' : 'bg-gray-200 cursor-not-allowed'
                        }`}
                        placeholder=" "
                    />
                    <label className="absolute left-4 -top-4 px-2 bg-gradient-to-r from-indigo-500 to-blue-400 text-white transition-all duration-300 transform scale-90 origin-top-left">
                        Age
                    </label>
                </div>

                {/* Location Input */}
                <div className="relative">
                    <input
                        type="text"
                        name="location"
                        value={doctorDetails.location}
                        onChange={handleChange}
                        disabled={!isEdit}
                        required
                        className={`w-full px-4 py-2 text-lg text-gray-800 rounded-lg shadow-md outline-none transition-transform duration-300 transform ${
                            isEdit ? 'border-2 border-white focus:border-yellow-500' : 'bg-gray-200 cursor-not-allowed'
                        }`}
                        placeholder=" "
                    />
                    <label className="absolute left-4 -top-4 px-2 bg-gradient-to-r from-indigo-500 to-blue-400 text-white transition-all duration-300 transform scale-90 origin-top-left">
                        Location
                    </label>
                </div>

                {/* Save or Edit Button */}
                <div className="text-center">
                    {isEdit ? (
                        <button
                            type="submit"
                            onClick={handleSave}
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                        >
                            {isNew ? "Add Doctor" : "Save Changes"}
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={enableEdit}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </form>
        </div>
        </div>
    );
};

export default DoctorProfile;
