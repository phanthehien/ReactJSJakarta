/**
 * Created by hien.phanthe on 3/15/17.
 */
import React, { Component, PropTypes } from 'react'


// //There are many ways to define an Component
// //1.
// class Contact extends Component {
//     render() {
//         const { contact } = this.props;
//
//         return(
//             <div/>
//         );
//     }
// }
//
// export default Contact;
//
// //2.
// const Contact = (props) => {
//     const { contact } = this.props;
//
//     return (
//         <div/>
//     );
// };
//
// export default Contact;

//3.
const Contact = ({ contact }) => {
    const { firstname, lastname } = contact;

    return (
        <span>{`${firstname} ${lastname}`}</span>
    );
};

export default Contact;


