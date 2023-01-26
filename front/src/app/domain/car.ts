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