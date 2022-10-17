import { Card } from 'react-bootstrap';

function Skill() {
    return (
        <Card bg="dark" variant="dark">
            <Card.Body>
                <Card.Title>Skill Title</Card.Title>
                <Card.Text>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Skill;