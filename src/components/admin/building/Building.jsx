import React from 'react'

const Building = () => {
    return ( 
        <>
            <div className="building container mt-5">
                <div className="mb-3 building-header">
                    <h1 style={{marginBottom:'0px'}}>Edificio Principal</h1>
                    <h5>ocupacion 30%</h5>
                </div>
                <div className='row'>
                    <div className="col-2">
                        <h1 className='btn btn-primary'>pisos 1</h1>
                        <h1 className='btn'>pisos 2</h1>
                        <h1 className='btn'>pisos 3</h1>
                        <h1 className='btn'>pisos 4</h1>
                    </div>
                    <div className="building-body col-10">
                        <h1>el body</h1>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Building;