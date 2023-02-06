import React, {Fragment } from 'react';
import Slider from '../Intro/Intro';
import Platform from '../Platforms/Platform';
import Overviews from '../Overviews/Overviews';
import Soulutions from '../Soulutions/Soulutions';
import Platformstw from '../Platformstw/Platformstw'
import Acceleration from '../Acceleration/Acceleration';
import Statistics from '../Statistics/Statistics'
const Index = () => {
  return (
    <Fragment>
        <Slider></Slider>
        <Soulutions></Soulutions>
        <Platform></Platform>
        <Overviews></Overviews>
        <Platformstw></Platformstw>
        <Acceleration></Acceleration>
        <Statistics></Statistics>
    </Fragment>
  );
}

export default Index;