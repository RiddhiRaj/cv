'use client';

import { useEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';

export function RotatingGlobe() {
  const chartDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: am4maps.MapChart | undefined;

    try {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      
      // Check and apply dark theme if in dark mode
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDarkMode) {
        am4core.useTheme(am4themes_dark);
      }

      // Create chart
      if (chartDiv.current) {
        chart = am4core.create(chartDiv.current, am4maps.MapChart);
        
        // Set map definition
        chart.geodata = am4geodata_worldLow;
        
        // Set projection
        chart.projection = new am4maps.projections.Orthographic();
        chart.panBehavior = "rotateLongLat";
        chart.deltaLatitude = -20;
        
        // Disable zoom
        chart.seriesContainer.draggable = false;
        chart.seriesContainer.resizable = false;
        chart.maxZoomLevel = 1;
        
        // Create polygon series
        const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;
        
        // Updated theme-aware colors with better dark mode support
        const polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.fill = am4core.color("#999999"); // Using a mid-gray
        polygonTemplate.fillOpacity = 0.4;
        polygonTemplate.stroke = new am4core.InterfaceColorSet().getFor("text"); // This will be black in light mode and white in dark mode
        polygonTemplate.strokeWidth = 0.1;

        chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#999999");
        chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.3;

        // Optional: Add this to make globe stand out more
        chart.background.fill = am4core.color("transparent");
        chart.background.fillOpacity = 0;
                
        // Continuous rotation
        chart.deltaLongitude = 100;
        setInterval(() => {
          chart!.deltaLongitude += 0.2;
        }, 15);

        // Listen for theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleThemeChange = (e: MediaQueryListEvent) => {
          if (e.matches) {
            am4core.useTheme(am4themes_dark);
          } else {
            am4core.unuseTheme(am4themes_dark);
          }
          // Force chart to redraw
          chart?.validateData();
        };
        mediaQuery.addListener(handleThemeChange);
      }
    } catch (e) {
      console.error("Error creating globe:", e);
    }

    return () => {
      chart?.dispose();
    };
  }, []);

  return (
    <span
      ref={chartDiv}
      style={{
        width: "16px",
        height: "16px",
        display: "inline-block",
        verticalAlign: "middle"
      }}
    />
  );
}