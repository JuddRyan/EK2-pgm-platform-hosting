import { useContext, useEffect, useState } from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client/core';
import { userContext } from '../context/userContext';
import BaseLayout from '../components/BaseLayout';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/styles';
import { VALIDATE_USER } from '../graphql/queries';
import { CREATE_ACCOUNT } from '../graphql/mutations';
import Container from '../components/Container';

const Login = () => {
	const [password, setPassword] = useState();
	const [email, setEmail] = useState();
	const [fullname, setFullname] = useState();
	const [alumni, setAlumni] = useState(false);
	const [showLogin, setShowLogin] = useState(true);
	const [user, setUser] = useContext(userContext);
	const navigate = useNavigate();

	// const { userData2, userLoading2, userError2 } = useQuery(UserQuery);

	const [createAccount, { data: createdAccount, loading, error }] =
		useMutation(CREATE_ACCOUNT);

	const [checkUser] = useLazyQuery(VALIDATE_USER);

	useEffect(() => {
		if (!createdAccount) return;
		console.log(createdAccount.createAccount);
		setUser(createdAccount.createAccount);
		localStorage.setItem('user', JSON.stringify(createdAccount.createAccount));
		navigate('/');
	}, [createdAccount]);

	if (!showLogin) {
		return (
			<BaseLayout>
				<Container style={{ width: '20rem', marginInline: 'auto' }}>
					<form action="">
						<div>
							<label>
								<p>email</p>
								<input type="text" onChange={(e) => setEmail(e.target.value)} />
							</label>
							<label>
								<p>Password</p>
								<input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>
							<label>
								<p>Fullname</p>
								<input
									type="text"
									onChange={(e) => setFullname(e.target.value)}
								/>
							</label>
							<label>
								<p>Alumni</p>
								<input type="checkbox" onChange={() => setAlumni(!alumni)} />
							</label>
						</div>
						<Button
							type="submit"
							onClick={async (e) => {
								e.preventDefault();
								createAccount({
									variables: {
										email: email,
										fullname: fullname,
										password: password,
										alumni: alumni,
									},
								});
								// console.log(alumni);
								// console.log(createdAccount);
							}}
						>
							Submit
						</Button>
						<Button onClick={() => setShowLogin(true)}>
							Already have an account?
						</Button>
						{/* </div> */}
					</form>
				</Container>
			</BaseLayout>
		);
	}

	return (
		<BaseLayout>
			<Container style={{ width: '20rem', marginInline: 'auto' }}>
				<form>
					<label>
						<p>email</p>
						<input type="text" onChange={(e) => setEmail(e.target.value)} />
					</label>
					<label>
						<p>Password</p>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<div>
						<Button
							type="submit"
							onClick={async (e) => {
								e.preventDefault();
								const test = await checkUser({
									variables: {
										email: email,
										password: password,
									},
								});
								if (test.data.accounts[0]) {
									setUser(test.data.accounts[0]);
									localStorage.setItem(
										'user',
										JSON.stringify(test.data.accounts[0])
									);
									navigate('/');
								}
							}}
						>
							Submit
						</Button>
					</div>
				</form>
				<Button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						setShowLogin(false);
					}}
				>
					Don't have an account yet?
				</Button>
			</Container>
		</BaseLayout>
	);
};

export default Login;
