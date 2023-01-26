import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Index'

export default function Index() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}
