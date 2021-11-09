import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import classNames from './FormationList.module.css'

const FormationList = () => {
    const [lessons, setLessons] = useState([])
    const history = useHistory()
    const redirect = path => {
        history.push(path)
    }
    
    useEffect( () => {
        const fetchLessons = async() => {
        const response = await fetch (`${process.env.REACT_APP_API_URL}lessons`)
        const data = await response.json()
        setLessons(data)
        } 
        fetchLessons()
    },[])

    return (
        <section className = {classNames.container}>
            <h2 className = {classNames.title}>Notre formation</h2>            
            {lessons.map (lesson => <div className = {classNames.lessons}> 
                                        <h4>{lesson.title}</h4>
                                        <p>{lesson.description}</p>
                                    </div>)}
            <button className = {classNames.button} onClick={ () => redirect ("/registration")}> S'abonner </button>
        
        </section>
    )
}

export default FormationList
