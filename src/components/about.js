import { Card } from "./card";

export const About = () => {
    return(
        <Card>
            <div className="flex-col">
                <h2>About me</h2>
                <p>This is a paragraph</p>
            </div>
            <div className="flex-col">
                <h2>Skills</h2>
                <p>React, Java</p>
            </div>
        </Card>
    );
}