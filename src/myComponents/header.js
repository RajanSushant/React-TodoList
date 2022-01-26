import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function header(props) {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Link className="navbar-brand" to="/">
					{props.title}
				</Link>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Link to="/" className="nav-link">
							Home
						</Link>
						<Link className="nav-link" to="/about">
							About
						</Link>
					</Nav>
					{props.searchBar ? (
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					) : (
						""
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

header.propTypes = {
	title: propTypes.string,
	searchbar: propTypes.bool.isRequired,
};

header.defaultProps = {
	title: "Todo-List",
	searchBar: true,
};
