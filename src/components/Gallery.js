import React from 'react'
import GridList  from '@material-ui/core/GridList';
import GridListTile  from '@material-ui/core/GridListTile';
import GridListTileBar  from '@material-ui/core/GridListTileBar';


const Gallery = (props) => {
    return (
        <div>
           <GridList cellHeight={355} cols={3}>
               {props.photos.map((item) => (
                   <GridListTile style={{flexGrow:'1'}} cols={item.width/3500}>
                     <img src={item.urls.regular} alt={item.alt_description} />
                     <GridListTileBar title={item.description} subtitle={item.user.name}></GridListTileBar>
                   </GridListTile>
                ))}
           </GridList>
        </div>
    )
}

export default Gallery
