import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { page: 1, isGray: false }
  }

  loadMore = () => {
    this.setState((oldState) => ({ page: oldState.page + 1 }))
  };

  toggleGray = () => {
    this.setState((oldState) => ({ isGray: !oldState.isGray }))
  };

  search = (e) => {
    const { value } = e.target;

    this.props.store.gallery.searchTerm = value;

    // reset page counter when search is cleared
    if (!value) this.setState((oldState) => ({ page: 1 }));
  };

  render() {
    let { photos }  = this.props.store.gallery;
    let numOfPhotos = this.state.page * 30;

    let photosUi = photos.slice(0, numOfPhotos).map((photo) =>
      <Grid key={photo.id} item>
        <Card style={{ width: '300px' }}>
          <CardMedia
            style={{ height: '300px' }}
            image={`https://picsum.photos/${this.state.isGray ? 'g/' : ''}300/300?image=${photo.id}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {photo.author}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );

    return (
      <div className="App">
        <Grid container justify="center" spacing={16}>
          <Grid item xs={12} sm={10} md={8} lg={5} xl={3}>
            <TextField
              style={{ width: '100%' }}
              id="outlined-search"
              label="Search photos"
              type="search"
              className=""
              margin="normal"
              variant="outlined"
              onChange={(e) => this.search(e)}
            />
          </Grid>
        </Grid>

        <Grid container justify="center" spacing={16}>
          <Grid item xs={12} sm={10} md={8} lg={5} xl={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.isGray}
                  onChange={this.toggleGray}/>
              }
              label="Gray mode"/>
          </Grid>
        </Grid>

        <Grid container justify="center" spacing={16}>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              displaying <span
              style={{ fontWeight: 600 }}>{photosUi.length}</span> images
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify="center" spacing={16}>
          {photosUi}
        </Grid>

        <Grid container justify="center" spacing={16}>
          <Grid item>
            <Button onClick={this.loadMore} variant="contained"
                    color="primary">Load more</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default inject('store')(observer(App));
