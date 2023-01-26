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

    constructor(email: string, nom: string, prenom: string, mdp: string) {
        // this.id = id;
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        // this.login = login;
        this.mdp = mdp;
        // this.categorie = categorie;
        // this._id = _id;
    }
}
