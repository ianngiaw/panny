const inflight = window.InFlight;

export const getPassengerName = () => {
  return new Promise(resolve => {
    inflight.initService('passenger_data/v1', passengerData => {
      passengerData.getPassengerDataInfo((err, data) => {
        resolve({
          firstName: data.pii.first_name,
          lastName: data.pii.last_name
        });
      });
    });
  });
};

export const getCurrentFlightInfo = () => {
  return new Promise(resolve => {
    inflight.initService('flightdata/v2', flightData => {
      flightData.originIATA((err, originIata) => {
        flightData.destinationIATA((err, destIata) => {
          flightData.distanceToDestination((err, distanceToDestination) => {
            flightData.distanceToOrigin((err, distanceToOrigin) => {
              flightData.timeToDestination((err, minutes) => {
                flightData.estimatedArrivalTime((err, timeData) => {
                  resolve({
                    time: timeData.raw,
                    progress: distanceToOrigin / (distanceToOrigin + distanceToDestination),
                    distanceToDestination,
                    minutes,
                    originIata,
                    destIata
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};

export const getNextFlightData = () => {
  return new Promise(resolve => {
    inflight.initService('connecting_gate/v1', nextFlightData => {
      nextFlightData.connectingGateInfo({}, function(err, data) {
        resolve({
          origin: data.current_flight.arrival_airport.iata_code,
          destination: data.connecting_flights[0].arrival_airport.iata_code,
          departureGate: data.connecting_flights[0].departure_gate,
          departureTime: data.connecting_flights[0].departure_time_scheduled,
          flightNumber: data.connecting_flights[0].flight_number
        });
      });
    });
  });
};
