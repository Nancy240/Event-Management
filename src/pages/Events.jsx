import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { Calendar, MapPin, Plus, Pencil, Trash2, X } from 'lucide-react';

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: " Morning Prayer Circle",
      date: "2024-03-25",
      location: "Community Center",
      category: "Religious",
      description: "A peaceful morning prayer session to start your day with reflection. Open to everyone, no matter your faith."
    },
    {
      id: 2,
      title: "Community Food Drive",
      date: "2024-03-28",
      location: "Local Food Bank",
      category: "Charity",
      description: "Help us collect and distribute food to those in need."
    },
    {
      id: 3,
      title: "Earth Day Tree Planting",
      date: "2024-04-22",
      location: "Park",
      category: "Social",
      description: "Celebrate Earth Day by planting trees in the park to help the environment and make our community greener."
    },
    {
      id: 4,
      title: "Charity Fundraising",
      date: "2024-03-20",
      location: "Banjara Hills",
      category: "Charity",
      description: "A fundraising event to support local shelters. There will be dinner, live music, and an auction."
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    location: '',
    category: 'Religious',
    description: ''
  });

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEventWithId = { ...newEvent, id: uuidv4() };
    if (editingEvent) {
      setEvents(events.map(event => event.id === editingEvent.id ? newEventWithId : event));
    } else {
      setEvents([...events, newEventWithId]);
    }
    setShowForm(false);
    setEditingEvent(null);
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setNewEvent(event);
    setShowForm(true);
  };

  const handleDelete = (eventId) => {
    setEventToDelete(eventId);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    setEvents(events.filter(event => event.id !== eventToDelete));
    setShowDeleteConfirmation(false);
    setEventToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setEventToDelete(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingEvent(null);
    setNewEvent({
      title: '',
      date: format(new Date(), 'yyyy-MM-dd'),
      location: '',
      category: 'Religious',
      description: ''
    });
  };

  return (

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div className="w-full md:w-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Upcoming
          <span className="text-blue-900"> Event</span>   
          </h1>
          <div className="flex flex-wrap gap-2">
            {['all', 'Religious', 'Social', 'Charity'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingEvent(null);
            setNewEvent({
              title: '',
              date: format(new Date(), 'yyyy-MM-dd'),
              location: '',
              category: 'Religious',
              description: ''
            });
          }}
          className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 w-full md:w-auto"
        >
          <Plus className="w-5 h-5" />
          <span>Add Event</span>
        </button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-white p-4 md:p-6 rounded-lg shadow-lg"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {editingEvent ? 'Edit Event' : 'Add New Event'}
            </h2>
            <button
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={newEvent.location}
              onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <select
              value={newEvent.category}
              onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
            <textarea
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="w-full border rounded-lg px-4 py-2 md:col-span-2 min-h-[100px]"
            />
            <div className="md:col-span-2 flex flex-col md:flex-row justify-end gap-2">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 w-full md:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 w-full md:w-auto"
              >
                {editingEvent ? 'Update Event' : 'Create Event'}
              </button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="event-card bg-white rounded-lg shadow-md overflow-hidden h-full"
          >
            <div className="p-4 md:p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${event.category === 'Religious' ? 'bg-blue-100 text-blue-800' :
                  event.category === 'Social' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                  {event.category}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(event)}
                    className="text-gray-500 hover:text-blue-900 transition-colors"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => handleDelete(event.id)}
                    className="text-gray-500 hover:text-red-600 transition-colors"
                    aria-label={`Delete event ${event.title}`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-500 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{format(new Date(event.date), 'MMMM dd, yyyy')}</span>
                </div>
                <div className="hidden sm:block text-gray-300 mx-2">•</div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Are you sure you want to delete "{events.find(e => e.id === eventToDelete)?.title}" Event?</h3>
            <div className="flex justify-end gap-4">
              <button onClick={cancelDelete} className="px-4 py-2 text-whit bg-green-200 rounded-lg">No</button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg">Yes</button>
            </div>
          </div>
        </div>
      )}

    </div>


  );
};

export default Events;
