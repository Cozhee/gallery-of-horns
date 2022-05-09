import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render() {
        return (
            <>
                <HornedBeast title="donkey" imageUrl="https://d.newsweek.com/en/full/2010784/donkey.jpg?w=1600&h=1600&q=88&f=fabb297756d66f322afe2b5fa86205ef" description="Cute and fluffy" />

                <HornedBeast title="Buck" imageUrl="https://mossyoak-cezjaqp1wr.netdna-ssl.com/sites/default/files/inline-images/10-point-buck.jpg" description="Slow and groggy" />

                <HornedBeast title="Ram" imageUrl="https://modernfarmer.com/wp-content/uploads/2014/08/nubianibex.jpg" description="Weak and fragile" />
            </>
        )
    }
}

export default Main