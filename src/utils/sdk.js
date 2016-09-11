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
          flightData.distanceToDestination((err, distance) => {
            flightData.timeToDestination((err, minutes) => {
              flightData.estimatedArrivalTime((err, timeData) => {
                resolve({
                  time: timeData.raw,
                  distance,
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
};

export const getNextFlightData = () => {
  return new Promise(resolve => {
    inflight.initService('connecting_gate/v1', nextFlightData => {
      nextFlightData.connectingGateInfo({}, function(err, data) {
        resolve({
          departureGate: data.connecting_flights[0].departure_gate,
          estimatedDepartureTime: data.connecting_flights[0].departure_time_estimated,
          scheduledDepartureTime: data.connecting_flights[0].departure_time_scheduled
        });
      });
    });
  });
};
