import React from 'react'

class Cats extends React.Component {

    state = {
        males: [],
        females: []
    }

    componentDidMount(){

        fetch('https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json')
        .then(response => response.json())
        .then((data) => {

            const boys = [];
            const girls = [];

            data.map(owner =>
                owner.pets !== null ?
                    owner.gender === 'Male' ?
                        owner.pets.map(pet =>
                            (pet.type === 'Cat') ?
                                boys.push(pet.name) : null
                        )
                    : owner.pets.map(pet =>
                            (pet.type === 'Cat') ?
                                girls.push(pet.name) : null
                    )
                : null
            )

            this.setState({males:boys.sort()})
            this.setState({females:girls.sort()})
        })
        .catch(console.log);
    }


    render(){

       return (
                      
            <div style={{width: "100%", overflow: "auto"}}>
                <div style={{width: "45%", marginRight: "5%", float: "left"}}>
                    <h2>Cats owned by gals</h2>
                    <ul>
                        {this.state.males.map(cat => <li key={cat}>{cat}</li>)}
                    </ul>
                </div>
                <div style={{width: "50%", float: "left"}}>
                    <h2>Cats owned by guys</h2>
                    <ul>
                        {this.state.females.map(cat => <li key={cat}>{cat}</li>)}
                    </ul>
                </div>
            </div>
        ) 
    }
    
}

export default Cats;