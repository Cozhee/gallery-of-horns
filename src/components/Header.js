import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <>
                <div style={{ marginBottom: 25, textAlign: 'center' }}>
                    <h1>Fearsome Horned Creatures who may not have horns</h1>
                    <p>Click a heart to favorite</p>
                </div>
            </>

        )
    }
}

export default Header