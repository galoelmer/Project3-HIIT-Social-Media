import React, { useContext } from "react";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import UserInfo from "../components/UserInfo";
import WodCard from "../components/wodCard";
import UserStatsCard from "../components/StatsCard";
import Col from "../components/Col";
import { UserContext } from "../App";

function Dashboard() {
	// Create State from App component UserContext
	// eslint-disable-next-line
	const { userInfo, userAuth } = useContext(UserContext);
	const [userData, setUserData] = userInfo;

	return (
		<Wrapper>
			<Row>
				<Col size="12 lg-7">
					<Row>
						<Col size="12">
							<UserInfo userData={userData} assignUser={setUserData} />
						</Col>
						<Col size="12">
							<UserStatsCard userData={userData} />
						</Col>
					</Row>
				</Col>
				<Col size="12 lg-5">
					<WodCard />
				</Col>
			</Row>
		</Wrapper>
	);
}

export default Dashboard;
