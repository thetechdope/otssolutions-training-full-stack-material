import React, { useState, useEffect } from "react";
import { Card, Icon } from "semantic-ui-react";

function DayOrNightComponent() {
  const [isDay, setDay] = useState(true);

  useEffect(() => {
    var currentHour = new Date().getHours();
    currentHour > 15 && setDay(false);
  }, []);

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {" "}
          <Icon name={isDay ? "sun" : "moon"} /> It's {isDay ? "Day" : "Night"}{" "}
          Time
        </Card.Header>
        <Card.Description>
          {isDay ? "It is a sunny day today." : "It is a chilly night."}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default DayOrNightComponent;
