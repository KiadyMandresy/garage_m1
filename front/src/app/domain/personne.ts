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
        email?: string, 
        nom?: string, 
        prenom?: string, 
        mdp?: string,
        id?:number,
        login?:string,
        categorie?:string) {
        if(id)
        this.id = id;
        this.email = email;
        this.nom = nom;
        if(prenom)
        this.prenom = prenom;
        if(login)
        this.login = login;
        this.mdp = mdp;
        if(categorie)
        this.categorie = categorie;
        // this._id = _id;
    }
}
