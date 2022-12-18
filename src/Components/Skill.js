import { Card } from 'react-bootstrap';

function Skill(props) {
    const skillItems = props.item.items.map(skill => {
        return (
            <li>{skill}</li>
        );
    })

    return (
        <Card className="bg-lightgreen text-dark">
            <Card.Body>
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Text>
                    <ul>
                        {skillItems}
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Skill;