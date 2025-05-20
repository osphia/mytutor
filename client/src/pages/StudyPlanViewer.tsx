import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { StudyPlanEntry } from '../types';

const StudyPlanViewer = () => {
  const [plan, setPlan] = useState<StudyPlanEntry[]>([]);

  useEffect(() => {
    api.get('/study-plan?userId=1&subjectId=1').then((res) => setPlan(res.data));
  }, []);

  return (
    <div>
      <h2>Study Plan</h2>
      <ul>
        {plan.map((entry) => (
          <li key={entry.id}>
            {entry.scheduled_date}: Topic {entry.topic_id} {entry.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyPlanViewer;