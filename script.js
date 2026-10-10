let currentQuizData = []; // Danh sách câu hỏi hiện tại (có thể xáo trộn hoặc giữ nguyên)
let currentIndex = 0;
let userAnswers = [];
let correctCount = 0;

// Thuật toán Fisher-Yates shuffle để xáo trộn ngẫu nhiên mảng
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Khởi tạo ban đầu (Mặc định khi load trang lần đầu sẽ xáo trộn ngẫu nhiên)
function initQuiz() {
    if (typeof quizData === 'undefined') {
        console.error("Không tìm thấy biến quizData. Vui lòng kiểm tra lại file question.js");
        return;
    }
    currentQuizData = shuffleArray(quizData);
    resetStateAndRender();
}

// Thiết lập lại trạng thái chung và render giao diện
function resetStateAndRender() {
    userAnswers = new Array(currentQuizData.length).fill(null);
    currentIndex = 0;
    correctCount = 0;

    const select = document.getElementById('jump-select');
    select.innerHTML = '';
    currentQuizData.forEach((q, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.text = `Number ${idx + 1}`;
        select.appendChild(opt);
    });
    
    document.getElementById('meta-total').innerText = `Total questions: ${currentQuizData.length}`;
    renderQuestion();
    updateMeta();
}

// 1. Tính năng: Làm lại từ đầu theo đúng thứ tự gốc trong questions.js
function resetQuiz() {
    currentQuizData = [...quizData];
    resetStateAndRender();
}

// 2. Tính năng: Làm lại với các câu hỏi ngẫu nhiên được xáo trộn thứ tự
function resetAndShuffleQuiz() {
    currentQuizData = shuffleArray(quizData);
    resetStateAndRender();
}

function renderQuestion() {
    const container = document.getElementById('question-container');
    const q = currentQuizData[currentIndex];
    const selectedOpt = userAnswers[currentIndex];
    const hasAnswered = selectedOpt !== null;

    let html = `
        <div class="mb-4 flex items-center justify-between">
            <span class="text-xs font-semibold px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full uppercase tracking-wider">Question ${currentIndex + 1} / ${currentQuizData.length}</span>
            ${hasAnswered ? `<span class="text-xs font-bold px-3 py-1 rounded-full ${selectedOpt === q.correct ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}">${selectedOpt === q.correct ? '✓ Chính xác' : '✕ Sai'}</span>` : ''}
        </div>
        <h2 class="text-lg md:text-xl font-normal text-slate-800 mb-4 leading-relaxed">${q.question}</h2>
    `;

    if (q.statements && q.statements.length > 0) {
        html += `<div class="mb-6 space-y-3 text-slate-700 text-sm md:text-base leading-relaxed">`;
        q.statements.forEach(stmt => {
            html += `<div>${stmt}</div>`;
        });
        html += `</div>`;
    }

    if (q.questionTable) {
        html += `<div class="mb-4 overflow-x-auto"><table class="min-w-full border border-slate-300 text-left text-sm">`;
        html += `<thead class="bg-slate-100 font-semibold text-slate-700"><tr>`;
        q.questionTable.headers.forEach(h => {
            html += `<th class="border border-slate-300 px-4 py-2">${h}</th>`;
        });
        html += `</tr></thead><tbody>`;
        q.questionTable.rows.forEach(row => {
            html += `<tr>`;
            row.forEach(cell => {
                html += `<td class="border border-slate-300 px-4 py-2 text-slate-700">${cell}</td>`;
            });
            html += `</tr>`;
        });
        html += `</tbody></table></div>`;
    }

    if (q.subQuestion) {
        html += `<p class="text-base font-semibold text-slate-800 mb-4">${q.subQuestion}</p>`;
    }

    if (q.optionTable) {
        html += `<div class="mb-6 overflow-x-auto"><table class="min-w-full border border-slate-300 text-center text-sm">`;
        html += `<thead class="bg-slate-100 font-bold text-slate-700"><tr>`;
        q.optionTable.headers.forEach(h => {
            html += `<th class="border border-slate-300 px-4 py-2">${h}</th>`;
        });
        html += `</tr></thead><tbody>`;
        q.optionTable.rows.forEach(row => {
            html += `<tr>`;
            row.forEach((cell, cellIdx) => {
                const alignClass = cellIdx === 0 ? 'font-semibold text-slate-900' : 'text-slate-700';
                html += `<td class="border border-slate-300 px-4 py-2 ${alignClass}">${cell}</td>`;
            });
            html += `</tr>`;
        });
        html += `</tbody></table></div>`;
    }

    html += `<div class="space-y-3">`;
    const optionLetters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, idx) => {
        const letter = optionLetters[idx];
        let borderClass = 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40';
        let bgClass = 'bg-white';
        let textClass = 'text-slate-700';
        let badgeClass = 'bg-slate-100 text-slate-600 border border-slate-200';

        if (hasAnswered) {
            if (idx === q.correct) {
                borderClass = 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500';
                textClass = 'text-emerald-900 font-semibold';
                badgeClass = 'bg-emerald-600 text-white';
            } else if (selectedOpt === idx && idx !== q.correct) {
                borderClass = 'border-rose-500 bg-rose-50 ring-1 ring-rose-500';
                textClass = 'text-rose-900 font-semibold';
                badgeClass = 'bg-rose-600 text-white';
            }
        } else {
            if (selectedOpt === idx) {
                borderClass = 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/20';
                textClass = 'text-indigo-900 font-semibold';
                badgeClass = 'bg-indigo-600 text-white';
            }
        }

        html += `
            <div onclick="${hasAnswered ? '' : `selectAnswer(${idx})`}" class="flex items-start p-3 rounded-xl border ${borderClass} ${bgClass} ${hasAnswered ? 'cursor-default' : 'cursor-pointer'} transition shadow-sm">
                <div class="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold uppercase mr-3 transition ${badgeClass}">
                    ${letter}
                </div>
                <span class="text-sm md:text-base ${textClass} self-center">${opt}</span>
            </div>
        `;
    });

    html += `</div>`;

    if (hasAnswered) {
        const isCorrect = selectedOpt === q.correct;
        html += `
            <div class="mt-6 p-4 rounded-xl ${isCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-rose-50 border border-rose-200 text-rose-900'}">
                <div class="font-semibold mb-1 flex items-center gap-2">
                    <span>${isCorrect ? '🎉 Great choice, you got it right!' : '💡 The correct answer is: ' + optionLetters[q.correct] + '. ' + q.options[q.correct]}</span>
                </div>
                <p class="text-sm mt-2 leading-relaxed opacity-90 explanation"><strong class="font-medium">📝 Detailed breakdown: </strong> ${q.explanation}</p>
            </div>
        `;
    }

    container.innerHTML = html;

    document.getElementById('btn-prev').disabled = currentIndex === 0;
    document.getElementById('btn-next').disabled = currentIndex === currentQuizData.length - 1;
    document.getElementById('page-indicator').innerText = `Number ${currentIndex + 1} / ${currentQuizData.length}`;
    document.getElementById('jump-select').value = currentIndex;
}

function selectAnswer(optionIndex) {
    if (userAnswers[currentIndex] !== null) return;
    userAnswers[currentIndex] = optionIndex;
    
    if (optionIndex === currentQuizData[currentIndex].correct) {
        correctCount++;
    }
    updateMeta();
    renderQuestion();
}

function nextQuestion() {
    if (currentIndex < currentQuizData.length - 1) {
        currentIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

function jumpToQuestion(index) {
    currentIndex = parseInt(index);
    renderQuestion();
}

function updateMeta() {
    const answeredCount = userAnswers.filter(a => a !== null).length;
    document.getElementById('meta-answered').innerText = `Completed: ${answeredCount}/${currentQuizData.length}`;
    document.getElementById('meta-score').innerText = `Score: ${correctCount}`;
}

function submitQuiz() {
    const answeredCount = userAnswers.filter(a => a !== null).length;
    const modal = document.getElementById('results-modal');
    const resultText = document.getElementById('result-text');
    resultText.innerHTML = `You answered: <strong class="text-indigo-600">${answeredCount} / ${currentQuizData.length}</strong> Question.<br>Correct answers: <strong class="text-emerald-600">${correctCount} Number</strong><br>Accuracy rate: <strong class="text-blue-600">${((correctCount/currentQuizData.length)*100).toFixed(1)}%</strong>`;
    modal.classList.remove('hidden');
}

function closeResults() {
    document.getElementById('results-modal').classList.add('hidden');
}

window.onload = function() {
    initQuiz();
};
