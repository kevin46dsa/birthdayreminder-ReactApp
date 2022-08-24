
import AuthService from '../../services/auth.service';
import birthdayDataservice from '../../services/birthdayDataservice';
import React, { useState, useEffect } from 'react';

const Homepage = () => {
    const [accessToken, setAccessToken] = useState('');
    const [birthday, setBirthday] = useState([]);
    
    useEffect(() => {
		var data = AuthService.getCurrentUser();
		if (data) {
			// setContent(data.user.userName);
			setAccessToken(data.accessToken);
		} else {
			// setContent("");
			setAccessToken(undefined);
		}
        
        //confused if i can add birthday service here
        
	}, []);
    
    useEffect(() => {
		birthdayDataservice.getBirthday().then((response) => {
			if (response) {
				//set state
			} else {
				setSpendingLimit('');
				setMonthExpense('');
			}
		});
	}, []);
    
    
    
    
    let today = `${5}`
    let tommrow = []
    const checkBirthday = async (event) => {
       // let Birthday = logicFunction.checkbirthday()
       let Birthday = [10,11]
        today = Birthday[0]
        tommrow = Birthday[1]
      };
    
    //https://dev.to/shareef/how-to-work-with-arrays-in-reactjs-usestate-4cmi
    
    
    return (

        <div>
			{accessToken !== undefined ? (
				<React.Fragment>
					<div className="Home">
            <h1>Birthday Reminder</h1>
            <button onClick={checkBirthday}>Check Birthdays</button>
            <h3>{ today }</h3>
            <h3>{tommrow}</h3>
        </div>
			</React.Fragment>
			) : (
				<React.Fragment>
					<div className="card posD">
						<h1>Restricted area</h1>
						<h2>
							<a href="/login" className="a12">
								Sign In
							</a>{' '}
							to Access DashBoard
						</h2>
					</div>
				</React.Fragment>
			)}
		</div>
    )
}

export default Homepage;
