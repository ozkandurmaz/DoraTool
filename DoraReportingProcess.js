import React from 'react';
import { ChevronRight, FileText, Users, Database, ArrowRightLeft, Info } from 'lucide-react';

const ProcessFlow = () => {
  const steps = [
    {
      title: 'Assess DORA Criteria',
      description: `Initial assessment phase to determine if an incident falls under DORA reporting requirements. 
        This involves evaluating the incident against specific DORA thresholds including operational/service disruptions, 
        financial impact, number of affected users, and potential systemic impact on the financial sector. 
        The assessment must be completed within 4 hours of incident detection to ensure compliance with reporting timelines.`,
      raci: {
        responsible: ['Incident Response Team Lead', 'Security Officer'],
        accountable: ['Chief Risk Officer'],
        consulted: ['Legal Team', 'Compliance Team', 'Technical Teams'],
        informed: ['Senior Management', 'Board Risk Committee', 'Business Unit Heads']
      },
      input: [
        'Incident alerts and detection data',
        'Initial impact metrics and measurements',
        'DORA classification criteria and thresholds',
        'Business service mapping and dependencies',
        'Current system/service status reports'
      ],
      output: [
        'Formal DORA classification decision',
        'Initial severity assessment report',
        'Regulatory reporting timeline plan',
        'Stakeholder notification matrix',
        'Preliminary impact statement'
      ],
      systems: [
        'Incident Management System',
        'Risk Assessment Framework Tool',
        'DORA Compliance Portal',
        'Security Information and Event Management (SIEM)',
        'Business Impact Analysis Tool'
      ]
    },
    {
      title: 'Initial Report',
      description: `Creation and submission of the initial notification to competent authorities within 24 hours of incident 
        classification. This report provides early warning and basic information about the incident. While detailed information 
        might be limited at this stage, it's crucial to establish first contact with authorities and demonstrate awareness and 
        control of the situation. The report must include preliminary assessment of impact and initial response measures taken.`,
      raci: {
        responsible: ['Security Officer', 'Compliance Manager'],
        accountable: ['Chief Compliance Officer'],
        consulted: ['Incident Response Team', 'Legal Team', 'Technical Teams'],
        informed: ['Senior Management', 'Communication Team', 'Business Stakeholders']
      },
      input: [
        'DORA assessment documentation',
        'Initial incident analysis results',
        'Preliminary damage assessment',
        'Early response actions log',
        'Stakeholder impact analysis'
      ],
      output: [
        'Initial DORA notification form',
        'First impact assessment report',
        'Early mitigation measure documentation',
        'Communication logs with authorities',
        'Preliminary timeline projection'
      ],
      systems: [
        'Regulatory Reporting Platform',
        'Document Management System',
        'Secure Communication Portal',
        'Incident Tracking Database',
        'Compliance Management Tool'
      ]
    },
    {
      title: 'Intermediate Report',
      description: `Comprehensive update required within 72 hours for ongoing incidents. This phase involves gathering 
        detailed information about the incident's current status, progress of mitigation efforts, and updated impact 
        assessment. The intermediate report should show progression from initial understanding and demonstrate active 
        management of the incident. It must include any new findings and adjusted response strategies.`,
      raci: {
        responsible: ['Incident Manager', 'Technical Lead'],
        accountable: ['Chief Information Security Officer'],
        consulted: ['Security Teams', 'Business Continuity Team', 'External Experts'],
        informed: ['Board Members', 'Senior Management', 'Regulatory Liaison']
      },
      input: [
        'Updated incident analysis',
        'Technical investigation findings',
        'Response effectiveness metrics',
        'Resource allocation status',
        'Stakeholder feedback and concerns'
      ],
      output: [
        'Detailed status report',
        'Updated impact assessment',
        'Response strategy documentation',
        'Resource utilization report',
        'Revised timeline estimates'
      ],
      systems: [
        'Crisis Management Platform',
        'Technical Analysis Tools',
        'Project Tracking System',
        'Resource Management Software',
        'Collaboration Platform'
      ]
    },
    {
      title: 'Root Cause Analysis',
      description: `Detailed technical and procedural investigation to identify the fundamental causes of the incident. 
        This phase requires deep analysis of technical logs, system states, and environmental factors. The investigation 
        should uncover not just technical failures but also procedural gaps and organizational vulnerabilities. This analysis 
        forms the foundation for preventing similar incidents and improving overall resilience.`,
      raci: {
        responsible: ['Technical Investigation Lead', 'Security Analyst'],
        accountable: ['Chief Technology Officer'],
        consulted: ['System Architects', 'External Security Consultants', 'Vendor Representatives'],
        informed: ['Risk Committee', 'Audit Team', 'Process Owners']
      },
      input: [
        'Comprehensive system logs',
        'Forensic analysis data',
        'System configuration records',
        'Change management history',
        'Staff interviews and reports'
      ],
      output: [
        'Detailed root cause report',
        'Technical vulnerability assessment',
        'Recommended security improvements',
        'Process gap analysis',
        'Prevention strategy document'
      ],
      systems: [
        'Forensic Analysis Platform',
        'Log Analysis Tools',
        'Configuration Management Database',
        'Vulnerability Assessment Tools',
        'Process Modeling Software'
      ]
    },
    {
      title: 'Final Report',
      description: `Compilation and submission of the comprehensive final report within 2 weeks of incident resolution. 
        This document serves as the official record of the incident, including complete timeline, all actions taken, 
        root cause findings, and measures implemented to prevent recurrence. The report must demonstrate thorough 
        handling of the incident and commitment to ongoing improvement. It should include evidence of compliance with 
        all DORA requirements and detail lessons learned.`,
      raci: {
        responsible: ['Compliance Director', 'Documentation Team Lead'],
        accountable: ['Chief Executive Officer'],
        consulted: ['All Department Heads', 'External Auditors', 'Legal Counsel'],
        informed: ['Board of Directors', 'Regulatory Bodies', 'Key Stakeholders']
      },
      input: [
        'All previous report versions',
        'Complete incident documentation',
        'Root cause analysis results',
        'Mitigation measure records',
        'Stakeholder correspondence'
      ],
      output: [
        'Final comprehensive report',
        'Executive summary',
        'Complete evidence portfolio',
        'Action plan for improvements',
        'Compliance certification'
      ],
      systems: [
        'Enterprise Documentation System',
        'Compliance Tracking Platform',
        'Knowledge Management System',
        'Quality Assurance Tool',
        'Regulatory Filing Platform'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">DORA Incident Reporting Process Flow</h2>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              
              <div className="flex-grow">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <div className="flex items-start">
                      <Info className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                          <Users className="w-5 h-5 mr-2" />
                          RACI Matrix
                        </h4>
                        <div className="space-y-3">
                          {Object.entries(step.raci).map(([role, people]) => (
                            <div key={role} className="bg-white p-3 rounded-lg">
                              <h5 className="font-medium text-gray-700 capitalize mb-2">{role}:</h5>
                              <ul className="space-y-1">
                                {people.map((person, i) => (
                                  <li key={i} className="flex items-center space-x-2 text-gray-600">
                                    <ChevronRight className="w-4 h-4 text-blue-500" />
                                    <span>{person}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                          <Database className="w-5 h-5 mr-2" />
                          Supporting Systems
                        </h4>
                        <ul className="space-y-1 bg-white p-3 rounded-lg">
                          {step.systems.map((system, i) => (
                            <li key={i} className="flex items-center space-x-2 text-gray-600">
                              <ChevronRight className="w-4 h-4 text-blue-500" />
                              <span>{system}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                          <ArrowRightLeft className="w-5 h-5 mr-2" />
                          Input Required
                        </h4>
                        <ul className="space-y-1 bg-white p-3 rounded-lg">
                          {step.input.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2 text-gray-600">
                              <ChevronRight className="w-4 h-4 text-blue-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                          <FileText className="w-5 h-5 mr-2" />
                          Output Produced
                        </h4>
                        <ul className="space-y-1 bg-white p-3 rounded-lg">
                          {step.output.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2 text-gray-600">
                              <ChevronRight className="w-4 h-4 text-blue-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="absolute left-4 top-8 w-px h-16 bg-blue-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;