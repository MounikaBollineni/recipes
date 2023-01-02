import React from 'react'
export const List = (props) => {
    const list=[
        {
            name:"Biriyani",
            link: "https://i.ytimg.com/vi/NGY2Qj-MAU4/maxresdefault.jpg"
        },

        {
            name:"Noodles",
            link: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg"
        }
    ]
  return (
    <div>
        {list.map((item,index)=>{
            if(item.name.toLowerCase()===props.name.toLowerCase()){
                return(
                    <img key ={index} src={item.link} alt={item.name} loading="lazy"/>
                )
            }
            
        })}
    </div>
  )
}
