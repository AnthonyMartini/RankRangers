'use client'
import React, { useState } from 'react';

const TabbedMenu = ({activeTab,setActiveTab}) => {

    return (
        <div className="w-full max-w-md mx-auto pt-2 shadow-md">
            <div className="flex border-gray-300 gap-2">
                <button
                    className={`flex-1 py-2 text-center rounded-lg border-2 ${activeTab === 'classSearch' ? ' border-blue-500 text-blue-500' : 'text-[#EEEEEE]'}`}
                    onClick={() => setActiveTab('classSearch')}
                >
                    Class Search
                </button>
                <button
                    className={`flex-1 py-2 text-center rounded-lg border-2 ${activeTab === 'instructorSearch' ? ' border-blue-500 text-blue-500' : 'text-[#EEEEEE]'}`}
                    onClick={() => setActiveTab('instructorSearch')}
                >
                    Instructor Search
                </button>
            </div>
            
        </div>
    );
};

export default TabbedMenu;
