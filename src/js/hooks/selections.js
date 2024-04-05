import _ from 'lodash';

export default {
  onSave({ sections, data, context, feeds }) {
    const slides = _.flatMap(sections, 'slides');

    // Hide these slides if data empty
    sections.forEach((section) => {
    
      if(section.key == 'fy25_pricing') {
        section.slides.forEach((slide) => {
          // Show/hide particular slide with its endpoint
          const isAgencyROISummaryHidden = slide.key === 'fy25_roi_summary' && !feeds.riosummaryNewListings?.totalNewListings;
          if (
            isAgencyROISummary
          ) slide.visible = false;
        });
      }
    });

    return sections;
  }
};
