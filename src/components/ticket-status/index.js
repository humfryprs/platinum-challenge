import React from 'react'
import leftArrow from "./fi_arrow-left.svg"
import "./style.scss"

const Ticket_Status = () =>{
	
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img src={leftArrow} alt="" />
						<h2>Tiket</h2>
					</div>
					<div className="col-6">
						
					</div>
				</div>
			</div>
		</div>
	)
}
export default Ticket_Status;