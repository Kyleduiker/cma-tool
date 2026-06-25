/* ============================================
   CMA Tool — Storage Helpers
   Saves/loads evaluations via localStorage
   ============================================ */

const CMA_KEY = 'duiker_cma_evaluations';

function getAllEvaluations() {
  try {
    return JSON.parse(localStorage.getItem(CMA_KEY) || '[]');
  } catch { return []; }
}

function saveEvaluation(evaluation) {
  const all = getAllEvaluations();
  const idx = all.findIndex(e => e.id === evaluation.id);
  if (idx >= 0) {
    all[idx] = evaluation;
  } else {
    all.unshift(evaluation);
  }
  localStorage.setItem(CMA_KEY, JSON.stringify(all));
  return evaluation;
}

function getEvaluation(id) {
  return getAllEvaluations().find(e => e.id === id) || null;
}

function deleteEvaluation(id) {
  const all = getAllEvaluations().filter(e => e.id !== id);
  localStorage.setItem(CMA_KEY, JSON.stringify(all));
}

function generateId() {
  return 'cma_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
}

function formatCurrency(val) {
  if (!val && val !== 0) return '—';
  return '$' + Number(val).toLocaleString('en-CA');
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
}
