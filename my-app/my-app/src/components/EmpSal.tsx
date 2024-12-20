//import React from 'react'

export default function EmpSal() {
    const empData = [
      { name: "taj mahal", location: "agra", country: "india",url:https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/d9/41.jpg },
      
    
    ];
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">location</th>
              <th scope="col">country</th>
              <th scope="col">url</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.name}</td>
                    <td>{x.location}</td>
                    <td>{x.country}</td>
                    <td>{x.url}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }