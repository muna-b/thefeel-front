import React from 'react'
import classNames from './TestimonyCard.module.css'

function TestimonyCard() {
    return (
        <section className = {classNames.section}>
            <h2 className = {classNames.title}> Quelques témoignages </h2>
            <div className = {classNames.container}>
                <div className = {classNames.cards}>
                    <div className = {classNames.cercle}></div>
                    <div className = {classNames.commentBox}>
                        <p>
                        The feel est un formidable site l'on peux progresser en anglais.
                        </p>
                    </div>
                </div>

                <div className = {classNames.cards}>
                    <div className = {classNames.cercle}></div>
                    <div className = {classNames.commentBox}>
                        <p>
                        J'ai pu apprendre quelques bases en anglais et quand j'échange avec mon fournisseur, je pense à ma progession grace à TheFeel. Et vous devez le faire.
                        </p>
                    </div>
                </div>

                <div className = {classNames.cards}>
                    <div className = {classNames.cercle}> </div>
                    <div className = {classNames.commentBox}>
                        <p>
                        C'est une utilisation vraiment efficace de mon temps lorsque je suis dans les transport. Si vous êtes une étudiant, une jeune maman ou que vous travaillez à domicile, il vous d'écouter les video avec des écouteurs, c'est génial !
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonyCard
