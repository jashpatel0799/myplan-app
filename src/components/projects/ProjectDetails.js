import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

 let ProjectDetails = (props) => {
    let id = props.match.params.id;
    let { project, auth } = props;
    if(!auth.uid) return <Redirect to='/signin' />

    if (project) {
        return(
            <div className='container section project-details'>
                <div className="card z-depth-0" key={id}>
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else{
        return(
            <div className="container center">
                <p>Loading Project...</p>
            </div>
        )
    }
}

let mapStateToProps = (state, ownProps) => {
    // console.log(state);
    let id = ownProps.match.params.id;
    let projects = state.firestore.data.projects; 
    let project = projects ? projects[id] : null
    return{
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
            { collection: 'projects' }
        ])
    )(ProjectDetails)