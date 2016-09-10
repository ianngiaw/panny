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

export const getTravelTime = () => {
  return new Promise(resolve => {
    inflight.initService('flightdata/v2', flightData => {
      flightData.estimatedArrivalTime((err, data) => {
        resolve({
          hours: data.hours,
          minutes: data.minutes
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
