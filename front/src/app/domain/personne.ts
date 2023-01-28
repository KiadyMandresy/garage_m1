import { Personne } from "./car";

export class Person implements Personne {
    id?: number;
    email?: string;
    nom?: string;
    prenom?: string;
    login: string;
    mdp: string;
    categorie?: string;
    _id?: string;

    constructor(
        email: string, 
        nom: string, 
        prenom: string, 
        mdp: string,
        id:number,
        login:string,
        categorie:string) {
        if(!id==undefined)
        this.id = id;
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        if(!login==undefined)
        this.login = login;
        this.mdp = mdp;
        if(!categorie==undefined)
        this.categorie = categorie;
        // this._id = _id;
    }
}
