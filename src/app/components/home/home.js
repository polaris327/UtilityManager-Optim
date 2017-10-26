import { app } from '../../bootstrap/core';
import { homeState } from './home.state';
import { homeComponent } from './home.component';

app.config(homeState);
app.component(homeComponent.name, homeComponent);
