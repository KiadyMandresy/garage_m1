import { Person } from "./personne";

export interface Personne{
    id?;
    email?;
    nom?;
    prenom?;
    login;
    mdp;
    categorie?;
    _id?;
    
}
export interface Facture{
    date?;
    montantTotal?;
    montantPaye?;
    _id?;
}
export interface Liste{
    type?;
    piece : string[];
    entree?;
    sortie?;
}
export interface Reparation{
    liste: Liste[];
    mecanicien: Personne,
    facture: Facture[];
}
export interface Car{
    id?;
    personne: Personne;
    nom?;
    marque?;
    numero?;
    statut?;
    reparation: Reparation[];
}
export class Cars implements Car{
    idVoit?;
    id?;
    personne: Personne;
    nom?;
    marque?;
    numero?;
    statut?;
    reparation: Reparation[];

    constructor (personne: any, nom: string, marque: string,numero:string)
    {
        // this.personne._id= personne._id;
        this.personne = new Person(personne.email,personne.nom,personne.prenom,
            personne.mdp,personne.id,personne.login,personne.categorie);
        // this.personne.id= personne.id;
        // this.personne.email = personne.email;
        // this.personne.login = personne.login;
        // this.personne.mdp = personne.mdp;
        // this.personne.prenom = personne.prenom;
        // this.personne.nom = personne.nom;
        // this.personne.categorie = personne.categorie;
        this.nom = nom;
        this.marque = marque;
        this.numero = numero;
    }
}