process.nextTick(()=>console.log(`this is process.nextick = 1`))
process.nextTick(()=>{console.log(`this is process.nextick = 2`)

    process.nextTick(()=>console.log(`this is inside process.nextick 2`))
})
process.nextTick(()=>console.log(`this is process.nextick = 3`))
// this is process.nextick = 1
// this is process.nextick = 2
// this is process.nextick = 3
// this is inside process.nextick 2


// Key Concept: How process.nextTick() Works
// process.nextTick() queues callbacks to be executed at the end of the current phase of the event loop, but before any I/O or timer events.

// If a process.nextTick() callback schedules another process.nextTick(), the newly scheduled callback is added to the same nextTick queue and will be executed before the event loop proceeds to the next phase.

// The nextTick queue is processed to completion before moving on to other phases of the event loop.

// Order of Execution
// The event loop begins, and the nextTick queue is processed before moving to other phases.

// The nextTick queue contains:

// Callback 1: this is process.nextick = 1.
// Callback 2: this is process.nextick = 2.
// Callback 3: this is process.nextick = 3.
// Processing the queue:

// Callback 1 is executed: prints this is process.nextick = 1.

// Callback 2 is executed: prints this is process.nextick = 2.

// While executing Callback 2, a new process.nextTick() (for this is inside process.nextick 2) is added to the same queue.
// Callback 3 is executed: prints this is process.nextick = 3.

// After all the originally queued callbacks are processed, the newly added callback (this is inside process.nextick 2) is executed:

// Prints this is inside process.nextick 2.