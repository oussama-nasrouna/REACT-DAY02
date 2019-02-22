import React from 'react';

const Valeur1=(props)=><div> <p>Montant:{props.mont}</p> <p>Interts:{props.inter}</p>  <p>Durée:{props.dur}</p> </div>
const Valeur2=(props)=><div> <p>Total_Crédit:{props.tot}</p> </div>  
const Valeur3=(props)=><div> <p>Mensualité:{props.Mens}/mois</p> </div>                   

export  {Valeur1,Valeur2,Valeur3};