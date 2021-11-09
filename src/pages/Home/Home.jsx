import React from 'react'
import BlueBox from '../../components/BlueBox/BlueBox'
import Card from '../../components/Card/Card'
import { HashLink } from 'react-router-hash-link'
import FormationList from '../../components/FormationList/FormationList'
import PresentationBox from '../../components/PresntationBox/PresentationBox'
import TestimonyCard from '../../components/TestimonyCard/TestimonyCard'
import classNames from './Home.module.css'

function Home() {
    return (
                window.title = 
                <div className = {classNames.container}>
                    <BlueBox />
                    <div className = {classNames.box}>
                        <Card 
                        image ="images/computer.svg"
                        alt ="Apprendre sur un ordinateur"
                        title ="Apprenez de n'importe où"
                        text ="Le lorem ipsum est, en imprimerie, une suite de mots sans signification."
                        />
                        <Card 
                        image ="images/teaching.svg"
                        alt ="Professeur qui fait son cour sur un tableau"
                        title ="Progressez à votre rythme"
                        text ="Le lorem ipsum est, en imprimerie, une suite de mots sans signification."
                        />
                        <Card 
                        image ="images/feel.svg"
                        alt ="apprendre sur son téléphone"
                        title ="Comprendre et parler anglais"
                        text ="Le lorem ipsum est, en imprimerie, une suite de mots sans signification."
                        />
                    </div>
                    <HashLink id="presentation">
                        <div></div>
                    </HashLink>
                    <PresentationBox />
                   
                    {/* <div className = {classNames.box}>                        
                        <div className = {classNames.photoBox}>
                        <img src="http://lorempixel.com/500/300/city/" alt=""/>
                        </div>
                        <div className = {classNames.paragraphBox}>
                        <h3 className = {classNames.titleH2}>Présentation</h3>
                        <p>
                        
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                        </p>
                        </div>
                    </div> */}
                    <HashLink id="formation">
                        <div></div>
                    </HashLink>
                    <FormationList />  
                    <HashLink id="testimoies">
                        <div></div>
                    </HashLink>
                    <TestimonyCard />                  

                </div>
    )
}

export default Home
