import React from 'react';
import {Valeur1,Valeur2,Valeur3} from "./Valeur"
import  './Stile.css'

class Forme extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            montant:0,
            interets:0,
            durée:0,
            total:0,
            mensu:0
        };
    }

   

    

    handelmontant=(event)=>
    {
        this.setState({montant:event.target.value})
        
    }

    handelinterets=(event)=>
    {
        this.setState({interets:event.target.value})
    }

    handelDurée=(event)=>
    {
        this.setState({durée:event.target.value})

       let interr = parseFloat(this.state.interets)/100;
       let a = parseFloat(this.state.montant);
       
       let totall=(a*interr)+a;
       this.setState({total:totall})

       

       let menss=(totall)/(event.target.value);
       this.setState({mensu:menss})
    }
   

    /*onChange={this.handelprenom}*/
    render()
    {
       return(
           <div className="a">
                <center>Veuillez remplir le montant et l'interets avant la durée <br/></center>  
                <center> <input className="b" placeholder="Saisir montant" type="text"     onChange={this.handelmontant} /> </center> 
                <center> <input className="b" placeholder="interets(%)" type="text"        onChange={this.handelinterets}/> </center> 
                <center> <input className="b" placeholder="Durée(mois) max 12" type="text" onChange={this.handelDurée}/>    </center> 

              

                <center> <Valeur1 mont={this.state.montant} inter={this.state.interets} dur={this.state.durée} /></center>
                <center><Valeur2 tot={this.state.total}/></center>
                <center><Valeur3 Mens={this.state.mensu} /></center>
               
           </div>
       )
    }
    
}
export default Forme;
