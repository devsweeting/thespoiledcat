import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import tileData from './images/reviews/tileData.js';



const ReviewsWrapper = styled.section `
  margin-top: 45px;
  width: 100%;
  margin-bottom: 45px;
`;

const Text = styled.p`
  font-size: 25px;
  padding: 10px 20px;
  text-align: center;
`;

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
    fontSize: '15px',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});


function Reviews(props) {
  const { classes } = props;

  return(
    <ReviewsWrapper>
      <Text id="reviews"> How great are our products? We'll let our customers tell you! </Text>
      <div className={classes.root}>
       <GridList className={classes.gridList} cols={2.5}>
         {tileData.map(tile => (
           <GridListTile key={tile.img}>
             <img src={tile.img} alt={tile.title} />
             <GridListTileBar
               title={tile.title}
               classes={{
                 root: classes.titleBar,
                 title: classes.title,
               }}
               actionIcon={
                 <IconButton>
                   <p className={classes.title} />
                 </IconButton>
               }
             />
           </GridListTile>
         ))}
       </GridList>
     </div>
   </ReviewsWrapper>
  )
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reviews)
