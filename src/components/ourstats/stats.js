    import React from "react";

    const OurStats = () => {
        const applyEasyPieChart = () => {
            const charts = document.querySelectorAll('.chart');
        
            charts.forEach(chart => {
                const percent = parseInt(chart.getAttribute('data-percent'));
                const percentSpan = chart.querySelector('.percent');
        
                percentSpan.textContent = percent;
        
                // Create the bar element
                const bar = document.createElement('div');
                bar.classList.add('bar');
                bar.style.width = percent + '%';
        
                // Set colors
                bar.style.backgroundColor = '#ffdc11'; // bar color
                chart.style.borderColor = '#dddddd'; // track color
        
                // Append the bar element
                chart.appendChild(bar);
            });
        };
        
        // Call the function when the DOM is ready
        document.addEventListener('DOMContentLoaded', applyEasyPieChart);
        
        return(
            <section class="numbers">
            <header>
                <div class="container">
                    <h1 class="h2 title">Your success is our success</h1>
                    <div class="text">
                        <p>Our mechanics and technicians constantly and carefully monitor the vechile, they accept and develop changes, research fashion and architectural, as well as sociological, changes and transform them into unique design.</p>
                    </div>
                </div>
            </header>

            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="item">
                            <span class="chart" data-percent="100">
                                <span class="percent"></span>
                            </span>
                            <div class="title">Delivery</div>
                            <div class="text">We act skilfully</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="item">
                            <span class="chart" data-percent="40">
                                <span class="percent"></span>
                            </span>
                            <div class="title">Discounts</div>
                            <div class="text">We respond quickly </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="item">
                            <span class="chart" data-percent="85">
                                <span class="percent"></span>
                            </span>
                            <div class="title">Promo</div>
                            <div class="text">We focus on market</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="item">
                            <span class="chart" data-percent="100">
                                <span class="percent"></span>
                            </span>
                            <div class="title">Happy clients</div>
                            <div class="text">We work with our customers </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        );
    };

    export default OurStats;