const Position = require("../../models/position");

module.exports = {
  positions: async () => {
    try {
      const positionsFetched = await Position.find();
      return positionsFetched.map((position) => {
        return {
          ...position._doc,
          _id: position.id,
          createdAt: new Date(position._doc.createdAt).toISOString(),
        };
      });
    } catch (error) {
      throw error;
    }
  },

  createPosition: async (args) => {
    try {
      const { type, status, notes, coordinates, gravity } = args.position;
      const position = new Position({
        type,
        status,
        notes,
        coordinates,
        gravity,
      });
      const newPosition = await position.save();
      return { ...newPosition._doc, _id: newPosition.id };
    } catch (error) {
      throw error;
    }
  },
};
