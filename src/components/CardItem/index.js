// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  return (
    <li className={`${cardDetails.className} card-container`}>
      <h1 className="card-heading">{cardDetails.title}</h1>
      <p className="card-description">{cardDetails.description}</p>
      <div className="card-img-container">
        <img
          src={cardDetails.imgUrl}
          alt={`${cardDetails.title}`}
          className="card-img"
        />
      </div>
    </li>
  )
}

export default CardItem
