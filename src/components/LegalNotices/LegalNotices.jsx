import React from 'react'
import classNames from './LegalNotices.module.css'

function LegalNotices() {
    return (
        <div className = { classNames.mainContainer } >
            <h3>Mentions légales</h3>
            <div className = { classNames.container } >
                <h4>IDENTITÉ</h4>
                <p>Nom du site web : thefeel</p>
                <p>Adresse : http://thefeel.fr</p>
                <p>Propriétaire : Fatimata Sakho</p>
                <p>Responsable de publication : Fatimata Sakho</p>
                <p>Conception et réalisation : Mainmouna Sakho</p>
                <p>Animation : Fatimata Sakho</p>
                <p>Hébergement : IONOS by 1&1</p>
                <p>7 Pl. de la Gare, 57200 Sarreguemines</p>
            </div>
            <div className = { classNames.container } >
                <h4>PERSONNE MORALE (projet personnel)</h4>
                <p>Thefeel – Forme juridique au capital de 100€ – RCS 123456789 – 36 rue du sergent goubin - Le Havre +33761788650 – contact@thefeel.fr</p>
            </div>
            <div className = { classNames.container } >
                <h4>CONDITIONS D’UTILISATION</h4>
                <p>L’utilisation du présent site implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.</p>
            </div>
            <div className = { classNames.container } >
                <h4>INFORMATIONS</h4>
                <p>Les informations et documents du site sont présentés à titre indicatif, n’ont pas de caractère exhaustif, et ne peuvent engager la responsabilité du propriétaire du site.
                Le propriétaire du site ne peut être tenu responsable des dommages directs et indirects consécutifs à l’accès au site.</p>
            </div>
            <div className = { classNames.container } >
                <h4>INTERACTIVITÉ</h4>
                <p>Les utilisateurs du site peuvent y déposer du contenu, apparaissant sur le site dans des espaces dédiés (notamment via les commentaires). Le contenu déposé reste sous la responsabilité de leurs auteurs, qui en assument pleinement l’entière responsabilité juridique.
                Le propriétaire du site se réserve néanmoins le droit de retirer sans préavis et sans justification tout contenu déposé par les    utilisateurs qui ne satisferait pas à la charte déontologique du site ou à la législation en vigueur.</p>
            </div>
            <div className = { classNames.container } >
                <h4>PROPRIÉTÉ INTELLECTUELLE</h4>
                <p>Sauf mention contraire, tous les éléments accessibles sur le site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) restent la propriété exclusive de leurs auteurs, en ce qui concerne les droits de propriété intellectuelle ou les droits d’usage. 1
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l’auteur.23
                Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient est considérée comme constitutive d’une contrefaçon et poursuivie. 4
                Les marques et logos reproduits sur le site sont déposés par les sociétés qui en sont propriétaires.</p>
            </div>
            <div className = { classNames.container } >
                <h4>LIENS</h4>
                <p>Liens sortantsLe propriétaire du site décline toute responsabilité et n’est pas engagé par le référencement via des liens hypertextes, de ressources tierces présentes sur le réseau Internet, tant en ce qui concerne leur contenu que leur pertinence.
                Liens entrantsLe propriétaire du site autorise les liens hypertextes vers l’une des pages de ce site, à condition que ceux-ci ouvrent une nouvelle fenêtre et soient présentés de manière non équivoque afin d’éviter :
                tout risque de confusion entre le site citant et le propriétaire du site
                ainsi que toute présentation tendancieuse, ou contraire aux lois en vigueur.
                Le propriétaire du site se réserve le droit de demander la suppression d’un lien s’il estime que le site source ne respecte pas les règles ainsi définies.</p>
            </div>
            <div className = { classNames.container } >
                <h4>CONFIDENTIALITÉ</h4>
                <p>Tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une preuve d’identité. 5678
                Le site ne recueille pas d’informations personnelles, et n’est pas assujetti à déclaration à la CNIL. 9</p>
            </div>
            <div className = { classNames.container } >
                <h4>CRÉDITS</h4>
                <p>Les images vectorielles sont tirées de sites offrant des images libres de droit et gratuites comme https://undraw.co/. Les vidéos Youtube sont des vidéos appartenant à des auteurs mentionnés en légende. Les seules vidéos qui nous appartient sont celles figurant sur nos réseaux sociaux à ce jour.</p>
            </div>
        </div>
    )
}

export default LegalNotices
